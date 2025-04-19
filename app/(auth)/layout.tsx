import Navbar from "@/components/shared/navbar"
import Sidebar from "@/components/shared/sidebar"
import { ChildProps } from "@/types"

const AuthLayout = ({ children }: ChildProps) => {
    return (
        <div className="relative">
            <Sidebar />
            <Navbar />
            <main className="flex items-center justify-center w-full h-[90vh] z-50 relative">
                {children}
            </main>
        </div>
    )
}

export default AuthLayout