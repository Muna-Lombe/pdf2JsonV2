import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SectionExtractionModuleService } from "./sectionextractionmodule.service";
import { PageDto } from "../pageProcessingModule/PageDto";
import { SectionDto } from "../sectionExtractionModule/SectionDto";

@swagger.ApiTags("sectionExtractionModules")
@common.Controller("sectionExtractionModules")
export class SectionExtractionModuleController {
  constructor(protected readonly service: SectionExtractionModuleService) {}

  @common.Get("/:id/analyze-page")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzePage(
    @common.Body()
    body: PageDto
  ): Promise<string> {
        return this.service.AnalyzePage(body);
      }

  @common.Post("/analyze-pdf-page")
  @swagger.ApiOkResponse({
    type: SectionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyzePdfPage(
    @common.Body()
    body: PageDto
  ): Promise<SectionDto[]> {
        return this.service.AnalyzePdfPage(body);
      }
}
