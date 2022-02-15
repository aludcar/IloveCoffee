import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './Entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id:1,
            name: 'Shpereck Roast',
            brand: 'Buddy Brew',
            flavors: ['Chocolate', 'Vanilla']
        }
    ]

    findAll(){
        return this.coffees;
    }

    findOne(id: string) {
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
          throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
      }

    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeDto:any){
        let existingCoffe = this.findOne(id);
        if(existingCoffe){
            existingCoffe = updateCoffeDto;
        }
    }

    remove(id: string){
        const coffeIndex = this.coffees.findIndex(item => item.id === +id);
        if(coffeIndex >= 0){
            this.coffees.splice(coffeIndex, 1);
        }
    }
}
