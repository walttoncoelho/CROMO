import { 
    TableList,
    Cabecalho,
    CabecalhoLabel,
    CabecalhoInput,
    TableConfig,
    TableOverflow,
    TBody,
    THead,
    TableHead,
    TableData,
    TableRow 
} from './style/CardListing'
import SwitchStatusButton from '../SwitchStatusButton/Switch'
import api from "../../../../services/api"

export default CardListEmpreendimento
function CardListEmpreendimento({ dados = {} }) {
    function toggleStatus(id) {
        return () => api.patch(`/manager/empreendimento/${id}/toggle-status`, {}, {
            headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        });
    }
    return(
        <>
        <TableList>
            <Cabecalho>
                <CabecalhoLabel>Exibir</CabecalhoLabel>
                <CabecalhoInput></CabecalhoInput>
                <CabecalhoLabel>Itens</CabecalhoLabel>
            </Cabecalho>
            <TableOverflow>
                <TableConfig>
                    <THead>
                        <TableHead>ID</TableHead>
                        <TableHead>Exibir</TableHead>
                        <TableHead>Título</TableHead>
                        <TableHead>Tipo de Empreendimento</TableHead>
                        <TableHead>Lotes</TableHead>
                        <TableHead>Área do Lote</TableHead>
                        <TableHead>Status da Construção</TableHead>
                        {/* <TableHead>Ações</TableHead> */}
                    </THead>
                    <TBody>
                        {dados.empreendimentos?.map(dado => (
                        <TableRow key={dado.id}>
                            <TableData>{dado.id}</TableData>
                            <TableData><SwitchStatusButton callback={ toggleStatus(dado.id) } checked={ dado.status } /></TableData>
                            <TableData>{dado.titulo}</TableData>
                            <TableData>{dado.tipoEmpreendimento}</TableData>
                            <TableData>{dado.lotes}</TableData>
                            <TableData>{dado.areaLote}</TableData>
                            <TableData>{dado.statusDaConstrucao}</TableData>
                            {/* <TableData>Editar | Excluir</TableData> */}
                        </TableRow>
                        ))} 
                    </TBody>
                </TableConfig>
            </TableOverflow>
        </TableList>
        </>
    )
}