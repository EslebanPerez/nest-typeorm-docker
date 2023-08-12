import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
    @InjectRepository(Breed)
    private readonly breedReRepository: Repository<Breed>
  ) {}

  async create(createCatDto: CreateCatDto) {
    //try {
      const breed = await this.breedReRepository.findOneBy({name: createCatDto.breed})
      if(!breed){
        throw new BadRequestException("Breed not found")
      }
      return await this.catRepository.save({...createCatDto, breed});
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async findAll() {
    return this.catRepository.find();
  }

  async findOne(id: number) {
    return this.catRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return 
    //return this.catRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return this.catRepository.softDelete({ id });
  }
}
