import Image from "next/image";

export function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Baillo's logo" width={40} height={40} />
            <span className="font-audiowide font-extrabold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BailloDev</span>
        </div>
    )
}