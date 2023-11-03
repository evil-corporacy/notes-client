import Main from "@/entities/vault/ui/main";
import Loading from "@/entities/vault/ui/loading";

const VaultCard = ({ vault, loading }: { vault?: any, loading: boolean }) => {
	if (!loading) return <Main vault={vault}/>
	else return <Loading/>
}

export default VaultCard
