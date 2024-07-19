package ONLINE.BOOKING.SYSTEM.Controller;

import ONLINE.BOOKING.SYSTEM.Model.Customer;
import ONLINE.BOOKING.SYSTEM.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/post-customer")
    public Customer postCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @GetMapping("/get-customer")
    public List<Customer> listCustomer() {
        return customerService.listCustomer();
    }

//    @GetMapping("/count-customer")
//    public long countCustomer() {
//        return customerService.countCustomer();
//    }

    @DeleteMapping("/delete-customer/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
    }

    @PutMapping("/customer/{id}")
    public Customer updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }

    @GetMapping("/customer/{id}")
    public Optional<Customer> findCustomerById(@PathVariable Long id) {
        return customerService.findCustomerById(id);
    }
}
