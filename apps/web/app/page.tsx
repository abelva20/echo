"use client"

import {useQuery} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col text-sm justify-center items-center">
          <p>
            Apps/webs {""}
            {users ? `Found ${users.length} users! ${JSON.stringify(users, null, 2)}` : "Loading..."}
          </p>
        </div>
    </div>
  )
}
