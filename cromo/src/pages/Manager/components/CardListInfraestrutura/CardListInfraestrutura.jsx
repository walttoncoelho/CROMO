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
/* import SwitchStatusButton from '../SwitchStatusButton/Switch' */

export default CardListInfraestrutura
function CardListInfraestrutura({ dados = [] }) {
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
                        <TableHead>Ícone</TableHead>
                        <TableHead>Título</TableHead>
                        <TableHead>Data de criação</TableHead>
                        {/* <TableHead>Ações</TableHead> */}
                    </THead>
                    <TBody>
                        {dados.map(dado => (
                        <TableRow key={dado.id}>
                            <TableData>{dado.id}</TableData>
                            <TableData>{dado.icone}</TableData>
                            <TableData>{dado.titulo}</TableData>
                            <TableData>{new Date(dado.createdAt).toLocaleDateString("pt-BR")}</TableData>
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