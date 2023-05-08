export default CardListBanner
import SwitchButton from '../SwitchButton/Switch'
import { TableListBanner,
         Cabecalho,
         TableConfig,
         THead,
         TableHead,
         TBody,
         TableRow,
         TableData,
} from './style/CardListBanner'

function CardListBanner() {
    const dados = [  
                    { 
                        ID: 1,
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 

                        ID: 2, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    }, 

                    {   
                        ID: 3, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 4, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 5, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 6, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 7, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 8, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 9, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },

                    { 
                        ID: 10, 
                        Titulo: 'Banner Topo Home', 
                        Categoria: 'Topo - Home', 
                        Status: 'Publicado', 
                        Ações: <SwitchButton></SwitchButton> 
                    },
                ];
    return(
        <>
        <TableListBanner>
            <Cabecalho>Lista de banners</Cabecalho>
            <TableConfig>
                <THead>
                    <TableHead >ID</TableHead>
                    <TableHead >Título</TableHead>
                    <TableHead >Categoria</TableHead>
                    <TableHead >Status</TableHead>
                    <TableHead >Ações</TableHead>
                </THead>
                <TBody>
                    {dados.map(({ID, Titulo, Categoria, Status, Ações }) => (
                        <TableRow key={ID}>
                            <TableData>{ID}</TableData>
                            <TableData>{Titulo}</TableData>
                            <TableData>{Categoria}</TableData>
                            <TableData>{Status}</TableData>
                            <TableData>{Ações}</TableData>
                        </TableRow>
                    ))} 
                </TBody>
            </TableConfig>
        </TableListBanner>
        </>
    )
}