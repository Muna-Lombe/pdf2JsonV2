import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PageJsonModuleService } from "./pagejsonmodule.service";
import { JsonDataDto } from "../pageJsonModule/JsonDataDto";

@swagger.ApiTags("pageJsonModules")
@common.Controller("pageJsonModules")
export class PageJsonModuleController {
  constructor(protected readonly service: PageJsonModuleService) {}

  @common.Post("/convert-section-data-to-json")
  @swagger.ApiOkResponse({
    type: JsonDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConvertSectionDataToJson(
    @common.Body()
    body: string
  ): Promise<JsonDataDto[]> {
        return this.service.ConvertSectionDataToJson(body);
      }

  @common.Get("/:id/convert-to-json")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConvertToJson(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConvertToJson(body);
      }
}
