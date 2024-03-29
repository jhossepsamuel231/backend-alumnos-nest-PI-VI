import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    autoLoadEntities: true,
    synchronize: true, //! No usar en producción
    ssl: process.env.POSTGRES_SSL === "true",
    extra: {
      ssl:
        process.env.POSTGRES_SSL === "true"
          ? {
            rejectUnauthorized: false,
          }
          : null,
    },
  }), PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
