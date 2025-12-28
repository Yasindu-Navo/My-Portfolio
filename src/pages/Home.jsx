import { StarBackground } from "../components/StarBackground"
import { ToggleTheme } from "../components/ToggleTheme"

export const Home = () => {
    
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            <h1>Hello</h1>
            {/* toggle theme */}

                <ToggleTheme />
      

            {/* background effects */}
            

            <StarBackground />
            
        </div>
    )
}