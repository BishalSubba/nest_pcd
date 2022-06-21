import { Repository } from 'typeorm';
import { VendorDto } from './vendors.dto';
import { Vendor } from './vendors.entity';
export declare class VendorsService {
    private vendorRepository;
    constructor(vendorRepository: Repository<Vendor>);
    postVendor(vendorDto: VendorDto): Promise<Vendor>;
    getVendors(vendor: Vendor): Promise<Vendor[]>;
    getVendor(_id: number): Promise<Vendor[]>;
    updateVendor(vendor: Vendor): Promise<void>;
    deleteVendor(vendor: Vendor): Promise<void>;
}
