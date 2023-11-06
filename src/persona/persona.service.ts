import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) { }

  async create(createPersonaDto: CreatePersonaDto) {
    const persona = this.personaRepository.create(createPersonaDto)
    return await this.personaRepository.save(persona);
  }

  async findAll() {
    return await this.personaRepository.find();
  }

  async findOne(id: number) {
    return await this.personaRepository.findOneBy({ id });
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return await this.personaRepository.update(id, updatePersonaDto);
  }

  async remove(id: number) {
    return await this.personaRepository.softDelete(id);
  }
}
