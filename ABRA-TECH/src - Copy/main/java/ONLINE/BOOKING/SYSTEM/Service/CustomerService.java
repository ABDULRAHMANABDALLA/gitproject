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

//   public long countCustomer() {     return customerRepository.count();
//  }

    public Customer updateCustomer(Long id, Customer customer) {
        Optional<Customer> existingCustomer = customerRepository.findById(id);
        if (existingCustomer.isPresent()) {
            Customer updatedCustomer = existingCustomer.get();
            updatedCustomer.setCustomerName(customer.getCustomerName());
            updatedCustomer.setCustomerEmail(customer.getCustomerEmail());
            updatedCustomer.setPhoneNumber(customer.getPhoneNumber());
            return customerRepository.save(updatedCustomer);
        } else {
            throw new RuntimeException("Customer not found with id = " + id);
        }
    }

    public Optional<Customer> findCustomerById(Long id) {
        return customerRepository.findById(id);
    }

    public void deleteCustomer(Long customer) {
        customerRepository.deleteById(customer);
    }
}