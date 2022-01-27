import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { Company } from './dto/company.dto';
import { pick } from 'lodash';

@Injectable()
export class CompaniesService {

  private readonly companiesUrlEndpoint: string;
  private readonly axiosConfig: AxiosRequestConfig;
  constructor(
  ) {
    const token = 'sk_30240e2d1dfc1d73d26ab80390d1fd49';
    this.companiesUrlEndpoint = 'https://company.clearbit.com/v2/companies/find?domain=';
    this.axiosConfig = {
      headers: { Authorization: `Bearer ${token}` }
    }
  }
  async getCompaniesByDomain(domain: string): Promise<Partial<Company>> {
    try {
      const response = await axios.get(
        this.companiesUrlEndpoint + domain, this.axiosConfig);
      return this.ConvertResponseToCompany(response.data);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  private ConvertResponseToCompany(response: unknown): Partial<Company> {
    return pick(response, [
      'name',
      'logo',
      'type',
      'domain',
      'description',
      'category.industry',
      'metrics.raised',
      'metrics.marketCap',
      'metrics.annualRevenue',
      'location',
      'metrics.employees',
    ]);
  }
}
