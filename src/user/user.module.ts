import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './person/person';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Person.name,
                schema: PersonSchema
            }
        ])
    ],
    exports: [],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule {}