import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './person/person';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(Person.name) private personModel: Model<Person>
    ) {}

    async listAll(): Promise<Person[]>{
        return this.personModel.find().exec();
    }

    async create(person: Person): Promise<Person>{
        const personCreated = new this.personModel(person);

        return personCreated.save();
    }

    async searchById(id: string): Promise<Person>{
        return this.personModel.findById(id).exec();
    }

    async update(id: string, person: Person): Promise<Person>{
        return this.personModel.findByIdAndUpdate(id, person).exec();
    }

    async remove(id: string): Promise< Person | null> {
        const personDeleted = this.personModel.findOneAndDelete({ _id: id }).exec();

        return this.personModel.findOneAndDelete({_id: id}).exec();
    }
}