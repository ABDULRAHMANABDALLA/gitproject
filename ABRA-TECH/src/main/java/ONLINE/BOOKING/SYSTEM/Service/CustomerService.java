package ONLINE.BOOKING.SYSTEM.Service;

import ONLINE.BOOKING.SYSTEM.Model.Customer;
import ONLINE.BOOKING.SYSTEM.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> listCustomer() {
        return customerRepository.findAll();
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    public Customer updateCustomer(Long id, Customer customer) {
        Optional<Customer> existingCustomerOptional = customerRepository.findById(id);
        if (existingCustomerOptional.isPresent()) {
            Customer existingCustomer = existingCustomerOptional.get();
            existingCustomer.setCustomerName(customer.getCustomerName());
            existingCustomer.setCustomerEmail(customer.getCustomerEmail());
            existingCustomer.setPhoneNumber(customer.getPhoneNumber());
            existingCustomer.setTour(customer.getTour());
            existingCustomer.setDate(customer.getDate());
            return customerRepository.save(existingCustomer);
        } else {
            throw new RuntimeException("Customer not found with id:" + id);
        }
    }

    public Optional<Customer> findCustomerById(Long id) {
        return customerRepository.findById(id);
    }
}
