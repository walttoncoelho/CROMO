export default CardListing
import { TableList,
         Cabecalho,
         CabecalhoLabel,
         CabecalhoInput,
         TableConfig,
         TableOverflow,
         TBody,
         THead,
         TableHead,
         TableData,
         TableRow } 
from './style/CardListing'

function CardListing() {
    const dados = [
                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Aguardando sua resposta', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    }, 

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },  

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },

                    { 
                        Ticket: 368711 , 
                        Assunto: 'E-mail', 
                        Status: 'Em tratamento', 
                        UltimaInteracao: '22/04/2023 11:07'
                    },
                ];
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
                        <TableHead>Ticket</TableHead>
                        <TableHead>Assunto</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Última interação</TableHead>
                    </THead>
                    <TBody>
                        {dados.map(({Ticket, Assunto, Status, UltimaInteracao }) => (
                            <TableRow key={Ticket}>
                                <TableData>{Ticket}</TableData>
                                <TableData>{Assunto}</TableData>
                                <TableData>{Status}</TableData>
                                <TableData>{UltimaInteracao}</TableData>
                            </TableRow>
                        ))} 
                    </TBody>
                </TableConfig>
            </TableOverflow>
        </TableList>
        </>
    )
}