import { ConnectButton } from "@/components/ConnectButton";
import { MainContainer } from "@/components/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <ConnectButton href="/api/login">Connect to Spotify</ConnectButton>
    </MainContainer>
  );
}
