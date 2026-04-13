import WhatsAppButton from "../WhatsAppButton"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <WhatsAppButton numero="5563992256085" />
        </div>
    )
}