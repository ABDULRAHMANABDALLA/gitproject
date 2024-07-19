package ONLINE.BOOKING.SYSTEM.Model;
import jakarta.persistence.*;

import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="staff")
@Entity
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int StaffId;
    public String staffName;
    public String staffEmail;
    public Date date;
    @OneToMany
    public List<Customer>customers;
}






