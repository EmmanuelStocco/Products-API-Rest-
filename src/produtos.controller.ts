import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto("LIV01", "LIVRO TDD E BDD NA PRATICA", 29.90),
        new Produto("LIV02", "LIVRO IA E BDD NA PRATICA", 29.90),
        new Produto("LIV03", "LIVRO MAT E BDD NA PRATICA", 29.90)
    ]

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto :Produto){
        produto.id = 100
        this.produtos.push(produto);
    }

    @Put()
    alterar(@Body() produto :Produto){
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtos.pop()
    }
}

