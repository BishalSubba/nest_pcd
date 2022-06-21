"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsController = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("./vendors.service");
const vendors_entity_1 = require("./vendors.entity");
const vendors_dto_1 = require("./vendors.dto");
let VendorsController = class VendorsController {
    constructor(service) {
        this.service = service;
    }
    postOrder(vendorDto) {
        return this.service.postVendor(vendorDto);
    }
    async getVendors(vendor) {
        return this.service.getVendors(vendor);
    }
    get(params) {
        return this.service.getVendor(params.id);
    }
    update(vendor) {
        return this.service.updateVendor(vendor);
    }
    deleteOrder(params) {
        return this.service.deleteVendor(params.id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vendors_dto_1.VendorDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "postOrder", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vendors_entity_1.Vendor]),
    __metadata("design:returntype", Promise)
], VendorsController.prototype, "getVendors", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "get", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vendors_entity_1.Vendor]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "deleteOrder", null);
VendorsController = __decorate([
    (0, common_1.Controller)('vendors'),
    __metadata("design:paramtypes", [vendors_service_1.VendorsService])
], VendorsController);
exports.VendorsController = VendorsController;
//# sourceMappingURL=vendors.controller.js.map