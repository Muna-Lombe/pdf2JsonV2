import * as graphql from "@nestjs/graphql";
import { PageJsonDataResolverBase } from "./base/pageJsonData.resolver.base";
import { PageJsonData } from "./base/PageJsonData";
import { PageJsonDataService } from "./pageJsonData.service";

@graphql.Resolver(() => PageJsonData)
export class PageJsonDataResolver extends PageJsonDataResolverBase {
  constructor(protected readonly service: PageJsonDataService) {
    super(service);
  }
}
