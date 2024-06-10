import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileInputService } from "./fileInput.service";
import { FileInputControllerBase } from "./base/fileInput.controller.base";

@swagger.ApiTags("fileInputs")
@common.Controller("fileInputs")
export class FileInputController extends FileInputControllerBase {
  constructor(protected readonly service: FileInputService) {
    super(service);
  }
}
