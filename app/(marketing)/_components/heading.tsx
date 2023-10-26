"use client";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import {SignInButton, UserButton} from "@clerk/clerk-react"
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 ">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Docs and plans. Unified. Welcome to{" "}
        <span className="underline">ZeNote</span>
      </h1>
      <h3>
        zeNote is the connected workspace where <br />
        better, faster work happerns.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center ">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">Explore zeNote
          <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton>
          <Button>
            Get Zenote
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
