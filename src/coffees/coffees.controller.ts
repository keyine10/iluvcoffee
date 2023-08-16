import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/create-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService:CoffeesService){

    }
    
    @Get()
    findAll(@Query() paginationQuery) {
        // let {offset, limit} = paginationQuery
        return this.coffeesService.findAll();
        // return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
    }
    @Get(":id")
    findOne(@Param('id') id: string) {
        let coffee = (this.coffeesService.findOne(id));
        if(!coffee){
            throw new NotFoundException(`Coffee ${id} not found!`);
        } else return coffee;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        this.coffeesService.create(createCoffeeDto);
        // return body;
    }
    @Patch(":id")
    update(@Param("id") id:string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        this.coffeesService.update(id,updateCoffeeDto);
        // return "This updates the #"+id+" coffee";
    }
    @Delete(":id") 
    remove(@Param("id") id:string){
        return this.coffeesService.remove(id);
        // return "This deletes the #"+id+" coffee";
    }

    @Get("flavors")
    findAllFlavors(): string {
        return 'This action returns all flavors';
    }

}
