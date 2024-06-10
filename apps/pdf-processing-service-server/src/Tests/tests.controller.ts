import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TestsService } from "./tests.service";
import { UploadFileInput } from "../fileHandlingModule/UploadFileInput";
import { SectionDto } from "../sectionExtractionModule/SectionDto";
import { JsonDataDto } from "../pageJsonModule/JsonDataDto";
import { PageDto } from "../pageProcessingModule/PageDto";

@swagger.ApiTags("tests")
@common.Controller("tests")
export class TestsController {
  constructor(protected readonly service: TestsService) {}

  @common.Post("/test-analyze-page")
  @swagger.ApiOkResponse({
    type: SectionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TestAnalyzePdfPage(
    @common.Body()
    body: UploadFileInput
  ): Promise<SectionDto[]> {
        return this.service.TestAnalyzePdfPage(body);
      }

  @common.Post("/test-convert-to-json")
  @swagger.ApiOkResponse({
    type: JsonDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TestConvertToSectionDataJson(
    @common.Body()
    body: UploadFileInput
  ): Promise<JsonDataDto[]> {
        return this.service.TestConvertToSectionDataJson(body);
      }

  @common.Post("/test-split-pdf")
  @swagger.ApiOkResponse({
    type: PageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TestSplitPdfPages(
    @common.Body()
    body: UploadFileInput
  ): Promise<PageDto[]> {
        return this.service.TestSplitPdfPages(body);
      }

  @common.Post("/test-upload-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TestUploadPdfFile(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.TestUploadPdfFile(body);
      }
}
