import { Module } from "@nestjs/common";
import { SectionModule } from "./section/section.module";
import { PageJsonDataModule } from "./pageJsonData/pageJsonData.module";
import { PageModule } from "./page/page.module";
import { FileInputModule } from "./fileInput/fileInput.module";
import { FileHandlingModuleModule } from "./FileHandlingModule/filehandlingmodule.module";
import { PageJsonModuleModule } from "./PageJsonModule/pagejsonmodule.module";
import { PageProcessingModuleModule } from "./PageProcessingModule/pageprocessingmodule.module";
import { SectionExtractionModuleModule } from "./SectionExtractionModule/sectionextractionmodule.module";
import { TestsModule } from "./Tests/tests.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    SectionModule,
    PageJsonDataModule,
    PageModule,
    FileInputModule,
    FileHandlingModuleModule,
    PageJsonModuleModule,
    PageProcessingModuleModule,
    SectionExtractionModuleModule,
    TestsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
