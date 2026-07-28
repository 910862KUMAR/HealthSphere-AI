package com.healthsphere.backend.service;

import com.healthsphere.backend.dto.BillingRequest;
import com.healthsphere.backend.dto.BillingResponse;

import java.util.List;

public interface BillingService {

    BillingResponse createBilling(BillingRequest request);

    List<BillingResponse> getAllBillings();

    BillingResponse getBillingById(Long id);

    BillingResponse updateBilling(Long id, BillingRequest request);

    void deleteBilling(Long id);
}