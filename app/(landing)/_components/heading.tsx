"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/app/spinner";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Unlocked! Welcome to{" "}
        <span className="underline">MndMtrx</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Join the Revolution
        <br />
        Embark on a journey of intellectual discovery and unparalleled
        productivity. With <span className="font-bold underline">MndMtrx</span>,
        build your own Second Brain and unlock the limitless potential of your
        mind.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter the MndMtrx
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get MndMtrx free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
