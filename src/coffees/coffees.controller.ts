import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
    Query} from '@nestjs/common';
import { CoffeesService  } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeService: CoffeesService){}
    /**GET */
    /*@Get()
    findAll(){
        return 'This acttions returns all coffees';
    }*/

    /**Example Query implementation */
    @Get()
    findAll(@Query() paginationQuery){
        //const{  limit, offset } = paginationQuery;
        return this.coffeService.findAll();
    }

    /**One Examples acces whit parameters container 
    @Get(':id')
    findOne(@Param() params){
        return `This acction returns #${params.id} coffe`;
    }*/

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeService.findOne(id);
    }

    /** POST */
    /*Return all body quest
    @Post()
    create(@Body() body) {
      return body;
      // return `This action creates a coffee`;
    }*/

    /**Example with https 
     * 
    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body("name") name: string) {
      return name;
      // return `This action creates a coffee`;
    }
    */

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
      return this.coffeService.create(createCoffeeDto);
    }

    /**Patch */
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto ){
        return this.coffeService.update(id, updateCoffeeDto)
    }

    /**Delete */
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeService.remove(id);
    }
}
