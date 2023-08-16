import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';
import { UpdateCoffeeDto } from './dto/create-coffee.dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees:Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla', 'strawberry']
        }
    ]
    findAll(){
        return this.coffees;
    }
    findOne(id: string){
        return this.coffees.find(coffee => coffee.id === +id);
    }
    create(coffee: CreateCoffeeDto){
        let newcoffee:Coffee = {
            id: this.coffees.length + 1,
            ...coffee,
        } 
        this.coffees.push(newcoffee);
    }
    update(id:string, coffee: UpdateCoffeeDto){
        const existingCoffee = this.findOne(id);
        existingCoffee.name = coffee.name;
        existingCoffee.brand = coffee.brand;
        existingCoffee.flavors = coffee.flavors;

    }
    remove(id: string){
        let coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        if(coffeeIndex>=0){
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
