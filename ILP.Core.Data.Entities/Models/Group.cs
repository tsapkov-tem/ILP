using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class Group : IEntity
    {
        [Key, Column("GroupId")]
        public string Id { get; set; } = null!;
        [Required]
        public string Name { get; set; } = null!;
        [JsonIgnore]
        public ICollection<User>? Users { get; }
        [JsonIgnore]
        public IList<Fellow>? Fellows { get; } = new List<Fellow>();
        public ICollection<Post>? Posts { get; }
        public ICollection<Lecture>? Lectures { get; }
        [JsonIgnore]
        public ICollection<VisitLecture>? VisitLectures { get; }
        [JsonIgnore]
        public LecturePlan? LecturePlan { get; set; }
    }
}
