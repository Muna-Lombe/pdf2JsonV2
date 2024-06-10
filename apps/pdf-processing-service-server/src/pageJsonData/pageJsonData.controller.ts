import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageJsonDataService } from "./pageJsonData.service";
import { PageJsonDataControllerBase } from "./base/pageJsonData.controller.base";

@swagger.ApiTags("pageJsonData")
@common.Controller("pageJsonData")
export class PageJsonDataController extends PageJsonDataControllerBase {
  constructor(protected readonly service: PageJsonDataService) {
    super(service);
  }
}
