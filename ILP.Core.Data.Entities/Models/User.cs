using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class User : IEntity
    {
        [Key, Column("UserId")]
        public string Id { get; set; } = null!;
        [Required]
        public string FirstName { get; set; } = null!;
        [Required]
        public string LastName { get; set; } = null!;
        public string? FatherName { get; set; } = null;
        public ICollection<Group>? Groups { get; }
        [JsonIgnore]
        public IList<Fellow>? Fellows { get; } = new List<Fellow>();
        //[JsonIgnore]
        //public ICollection<Post>? Posts { get; }
        //[JsonIgnore]
        //public ICollection<Comment>? Comments { get; }
        //[JsonIgnore]
        //public ICollection<Lecture>? Lectures { get; }
        //[JsonIgnore]
        //public ICollection<VisitLecture>? VisitLectures { get; }
        //[JsonIgnore]
        //public ICollection<Lecture>? NoteLectures { get; }
    }
}
