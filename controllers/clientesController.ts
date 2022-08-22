import { Request, Response } from "express";
import { IClientes } from '../models/clientes';
import ClienteRepository from '../models/clientesModel';

async function index(req: Request, res: Response, next:any) {
    const cliente = await ClienteRepository.findAll();
    res.render("index", {cliente: cliente});
}
async function detalhe (req:Request, res: Response, next:any){
    const cliente = await ClienteRepository.findByPk(req.params.id);
    res.render("show", {cliente:cliente});
}
async function cadastrar (req:Request, res: Response, next:any){
    // const cliente = await ClienteRepository.findByPk(req.params.id);
    res.render("cadastrar");
}
async function store (req:Request, res: Response, next:any){
    try{
        type cliente = Omit<IClientes, "id">;
        await ClienteRepository.create(req.body as cliente)
        res.render('index');
    }catch(error){
        console.log(error);
        res.status(500).end();
    }

}
async function editar (req: Request, res: Response ,next: any) {
    try{
        const cliente = await ClienteRepository.findByPk(req.params.id);
        if(cliente == null) {
            res.status(404).send("Não encontrado");
        }else {
            res.status(200).render('editar', {cliente:cliente});
        }
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
    
}
async function atualizar(req: Request, res: Response ,next: any) {
    try{
        await ClienteRepository.update(req.body as IClientes, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('cliente')
    }catch(error){
        console.log(error);
        res.status(500).end();
        
    }
}
async function destroy(req: Request, res: Response ,next: any) {
    try{
        await ClienteRepository.destroy({
            where: {
                id: req.params.id
            }
        })
    }catch(error) {
        console.log(error);
        res.status(500).end();
    }
    res.redirect('/cliente');
}



export default { index, detalhe, cadastrar, store, editar,atualizar, destroy };