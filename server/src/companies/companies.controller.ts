import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './dto/company.dto';
const isValidDomain = require('is-valid-domain');

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) { }

  @Get(':domain')
  getCompaniesByDomain(@Param('domain') domain: string): Promise<Partial<Company>> {
    this.validateDomain(domain);
    return this.companiesService.getCompaniesByDomain(domain);
  }

  private validateDomain(domain: string) {
    if (isValidDomain(domain) === false) {
      console.error('Bad request - invalid domain');
      throw new BadRequestException('Invalid domain');
    }
  }
}
