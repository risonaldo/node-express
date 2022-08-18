import { Request, Response } from "express";
import { IClientes } from '../models/clientes';
import ClienteRepository from '../models/clientesModel';

function index(req: Request, res: Response, next:any) {
    res.render("index");
}

function produto (req:Request, res: Response, next:any){
    var produtos= [
        {
            nome: "Memoria Ram",
            descricao: "16Gb"
        },
        {
            nome: "Placa de Video",
            descricao: "8Gb"
        },
        {
            nome: "Monitor",
            descricao: "Full HD"
        },
    ];
    var produto = produtos[parseInt(`${req.params.id}`)];
    res.render("produto", {produto: produto})
}

export default { index,produto };