import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Person } from './person/person';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    async listAll(): Promise<Person[]> {
        return this.userService.listAll();
    }

    @Post()
    async create(@Body() person: Person): Promise<Person> {
        return this.userService.create(person);
    }

    @Get(':id')
    async searchForId(@Param('id') id: string): Promise<Person> {
        return this.userService.searchById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() personUpdated: Person): Promise<Person> {
        return this.userService.update(id, personUpdated);
    }

    @Delete(':id')  
    async remove(@Param('id') id: string): Promise<Person | null> {
        return this.userService.remove(id);
    }
}   