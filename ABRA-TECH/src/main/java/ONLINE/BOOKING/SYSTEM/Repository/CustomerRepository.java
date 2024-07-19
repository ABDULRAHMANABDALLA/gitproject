package ONLINE.BOOKING.SYSTEM.Repository;

import ONLINE.BOOKING.SYSTEM.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
