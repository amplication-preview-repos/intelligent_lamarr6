import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImplantService } from "./implant.service";
import { ImplantControllerBase } from "./base/implant.controller.base";

@swagger.ApiTags("implants")
@common.Controller("implants")
export class ImplantController extends ImplantControllerBase {
  constructor(protected readonly service: ImplantService) {
    super(service);
  }
}
