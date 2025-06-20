package com.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.customer.entity.Customer;
import com.customer.repository.CustomerRepository;

@Service
public class CustServiceImpl implements CustService{

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public List<Customer> fetchAllCustomers() {
		return (List<Customer>) customerRepository.findAll();
	}

	@Override
	public Customer fetchById(Long Id) {		
		return customerRepository.findById(Id).get();
	}

	@Override
	public Customer createCustomer(Customer customer) {
		return customerRepository.save(customer );
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public String deleteCustomer(Customer customer) {
		customerRepository.delete(customer);
		return "Customer is successfully deleted... --->>> "+ customer.getName()+", "+ customer.getEmail()+", "+ customer.getAddress()+"...";
	}

}
