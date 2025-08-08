import { ToastProvider } from "@/components/providers/toastProvider";
import { UserInitializer } from "@/components/providers/userInitializer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserContextProvider } from "../context/userDataContextProvider";
import ApplicationNavbar from "@/components/navigation-bar/main-navbar/page";


export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
        redirect("/signup");
    }

    return (
        <>
            <UserContextProvider>
                <UserInitializer>
                    <ToastProvider />
                    <div className="w-screen h-screen flex flex-col justify-start items-center">
                        <ApplicationNavbar />
                        <div className="bg-[#f3f2ef] w-full h-full flex flex-col items-center justify-center gap-2 overflow-y-scroll">
                            {children}
                        </div>
                    </div>
                </UserInitializer>
            </UserContextProvider>

        </>
    );
}


