import { VendorsService } from './vendors.service';
import { Vendor } from './vendors.entity';
import { VendorDto } from './vendors.dto';
export declare class VendorsController {
    private service;
    constructor(service: VendorsService);
    postOrder(vendorDto: VendorDto): Promise<Vendor>;
    getVendors(vendor: Vendor): Promise<Vendor[]>;
    get(params: any): Promise<Vendor[]>;
    update(vendor: Vendor): Promise<void>;
    deleteOrder(params: any): Promise<void>;
}
