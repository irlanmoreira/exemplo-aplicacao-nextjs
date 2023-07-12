


import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { httpClient } from "@/services/api";

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const accessTokenResponse = await axios.post(
    'https://github.com/login/oauth/access_token',
    null,
    {
      params: {
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    },
  )

  const { access_token } = accessTokenResponse.data

  const userResponseGithub = await axios.get('http://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  console.log(userResponseGithub.data)

  let userResponseLocal
  try {
    userResponseLocal = await httpClient.post("/login", { email: `${userResponseGithub.data.login}@github.com`, password: userResponseGithub.data.node_id })
  } catch (e) {
    await httpClient.post('/register',
      {
        "password": userResponseGithub.data.node_id,
        "name": userResponseGithub.data.name,
        "books": [],
        "githubId": userResponseGithub.data.id,
        "email": `${userResponseGithub.data.login}@github.com`,
      })

    userResponseLocal = await httpClient.post("/login", { email: `${userResponseGithub.data.login}@github.com`, password: userResponseGithub.data.node_id })
  }

  if (userResponseLocal.data.accessToken) {

    const redirectTo = request.cookies.get('redirectTo')?.value

    const redirectURL = redirectTo ?? new URL('/', request.url)

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30
    return NextResponse.redirect(redirectURL, {
      headers: {
        'Set-Cookie': `accessToken=${userResponseLocal.data.accessToken}; Path=/; max-age=${cookieExpiresInSeconds}`,
      }
    })
  }

  return NextResponse.redirect(new URL('/signin', "http://localhost:3000"))
}