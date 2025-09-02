"use client"

import {Authenticated, Unauthenticated, useMutation, useQuery} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
    <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <UserButton/>
          <h1 className="text-2xl font-bold mb-4">
            Apps/Web
          </h1>
          <Button
            onClick={() => addUser()}
          >
            Add
          </Button>
          <div className="flex flex-col text-sm max-w-sm mt-5">
            <p>
              {users ? `Found ${users.length} users! ${JSON.stringify(users, null, 2)}` : "Loading..."}
            </p>
          </div>
        </div>
    </Authenticated>
    <Unauthenticated>
      <p className="flex flex-col items-center justify-center">
        Sign in to see the app.
      </p>
      <SignInButton>
        Signin
      </SignInButton>
    </Unauthenticated>
    </>
  )
}
