package ONLINE.BOOKING.SYSTEM.Model;
import jakarta.persistence.*;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "customer")
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String customerName;
    public String customerEmail;
    public int phoneNumber;
    public String tour;

    @ManyToOne
    public Staff staff;

}




