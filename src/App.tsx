import { Button } from 'shadcn/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'shadcn/ui/tabs';

export function App() {
    return (
        <div className="text-3xl">
            <Button>Aaaa test</Button>

            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>
    );
}
